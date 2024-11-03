async function sendQuestion() {
    const question = document.getElementById("question").value;
    const userId = document.getElementById("userId").value;
    const chatHistoryDiv = document.getElementById("chat-history");

    if (!question) {
        alert("Please enter a question.");
        return;
    }

    const formData = new FormData();
    formData.append("user_id", userId);  
    formData.append("question", question);
    formData.append("is_image", "false");

    try {
        const response = await fetch("/chat", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Error in request");
        }

        const data = await response.json();
        const assistantResponse = data.response || "No response from assistant";

        chatHistoryDiv.innerHTML += `<div class="chat-message"><strong>Assistant:</strong> ${assistantResponse}</div>`;
        chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;  

        document.getElementById("question").value = "";
    } catch (error) {
        console.error("Error sending question:", error);
        alert("An error occurred. Please try again.");
    }
}


async function viewChatHistory() {
    const userIdInput = prompt("enter ur id");
    const userId = parseInt(userIdInput);  

    if (!userId) {
        alert("Please enter a valid User ID.");
        return;
    }

    try {
        const response = await fetch(`/chat_history?user_id=${userId}`);
        const data = await response.json();

        const chatHistoryDiv = document.getElementById("chat-history");
        chatHistoryDiv.innerHTML = ""; 

        if (data.chat_history && data.chat_history.length > 0) {
            data.chat_history.forEach(chat => {
                chatHistoryDiv.innerHTML += `<div class="user-message"><strong>User:</strong> ${chat.user_message || 'No message'}</div>`;
                chatHistoryDiv.innerHTML += `<div class="chat-message"><strong>Assistant:</strong> ${chat.assistant_response || 'No response'}</div>`;
            });
        } else {
            chatHistoryDiv.innerHTML = `<p>No chat history found for User ID ${userId}.</p>`;
        }
    } catch (error) {
        console.error("Error retrieving chat history:", error);
        alert("An error occurred while fetching the chat history.");
    }
}


async function clearChatHistory() {
    const userIdInput = prompt("enter ur id");
    const userId = parseInt(userIdInput);  
    if (!confirm(`Are you sure you want to clear the chat history for User ID ${userId}?`)) return;

    try {
        const response = await fetch(`/clear_chat_history?user_id=${userId}`, {
            method: "DELETE"
        });

        const data = await response.json();
        alert(data.message || "Chat history cleared.");
        document.getElementById("chat-history").innerHTML = ""; 
    } catch (error) {
        console.error("Error clearing chat history:", error);
        alert("An error occurred while clearing the chat history.");
    }
}
