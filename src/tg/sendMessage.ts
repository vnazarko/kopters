export function sendMessage(message: string): void {
    const token = '6689950932:AAGf_tJtrYxU8N0xTQoI2T8uXf8AuYmTA0U'; 
    const telegramAPI = `https://api.telegram.org/bot${token}/sendMessage`;

    const params = new URLSearchParams({
        chat_id: '-1002013063666',
        text: message,
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
    };

    fetch(telegramAPI, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Message sent:', data);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}

