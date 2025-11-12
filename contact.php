<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

session_start();

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) && !filter_var($email, FILTER_VALIDATE_EMAIL, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE);
}

function isSpam($data) {
    $spamKeywords = ['casino', 'viagra', 'cialis', 'porn', 'xxx', 'bitcoin', 'crypto', 'lottery', 'winner', 'congratulations'];
    $text = strtolower($data['name'] . ' ' . $data['email'] . ' ' . $data['message']);
    
    foreach ($spamKeywords as $keyword) {
        if (strpos($text, $keyword) !== false) {
            return true;
        }
    }
    
    if (strlen($data['message']) < 10) {
        return true;
    }
    
    if (preg_match('/[^\x00-\x7F]/', $data['message']) && !preg_match('/[\x{1F600}-\x{1F64F}]|[\x{1F300}-\x{1F5FF}]|[\x{1F680}-\x{1F6FF}]|[\x{1F1E0}-\x{1F1FF}]/u', $data['message'])) {
        return true;
    }
    
    $urlCount = preg_match_all('/https?:\/\//', $data['message']);
    if ($urlCount > 2) {
        return true;
    }
    
    return false;
}

function rateLimitCheck() {
    $ip = $_SERVER['REMOTE_ADDR'];
    $currentTime = time();
    
    if (!isset($_SESSION['last_submission'])) {
        $_SESSION['last_submission'] = 0;
        $_SESSION['submission_count'] = 0;
    }
    
    if ($currentTime - $_SESSION['last_submission'] < 60) {
        $_SESSION['submission_count']++;
        if ($_SESSION['submission_count'] > 3) {
            return false;
        }
    } else {
        $_SESSION['submission_count'] = 1;
    }
    
    $_SESSION['last_submission'] = $currentTime;
    return true;
}

try {
    if (!rateLimitCheck()) {
        http_response_code(429);
        echo json_encode(['error' => 'Too many requests. Please wait before submitting again.']);
        exit;
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        $input = $_POST;
    }
    
    $name = trim($input['name'] ?? '');
    $email = trim($input['email'] ?? '');
    $phone = trim($input['phone'] ?? '');
    $message = trim($input['message'] ?? '');
    
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'Name, email, and message are required.']);
        exit;
    }
    
   
    
    $formData = [
        'name' => $name,
        'email' => $email,
        'message' => $message
    ];
    
    if (isSpam($formData)) {
        http_response_code(400);
        echo json_encode(['error' => 'Message appears to be spam.']);
        exit;
    }
    
    $to = 'info@theconvoke.com';
    // $to = 'pk.parshar91@gmail.com';
    $subject = 'New Contact Form Submission - TheConvokee';
    
    $emailBody = "New contact form submission from TheConvokee website:\n\n";
    $emailBody .= "Name: " . $name . "\n";
    $emailBody .= "Email: " . $email . "\n";
    $emailBody .= "Phone: " . ($phone ?: 'Not provided') . "\n";
    $emailBody .= "Message:\n" . $message . "\n\n";
    $emailBody .= "Submitted at: " . date('Y-m-d H:i:s') . "\n";
    $emailBody .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    
    $headers = [
        'From: noreply@theconvokee.com',
        'Reply-To: ' . $email,
        'Return-Path: noreply@theconvokee.com',
        'X-Mailer: PHP/' . phpversion(),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'X-Priority: 3',
        'Message-ID: <' . time() . rand(1000, 9999) . '@theconvokee.com>',
        'Date: ' . date('r'),
        'X-Spam-Check: Passed'
    ];
    
    $headerString = implode("\r\n", $headers);
    
    if (mail($to, $subject, $emailBody, $headerString)) {
        echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
    } else {
        error_log('Mail function failed for contact form submission');
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send message. Please try again later.']);
    }
    
} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'An error occurred. Please try again later.']);
}
?>