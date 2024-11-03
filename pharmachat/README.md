# AI-Powered Pharmacy Chatbot

This project is an AI-powered pharmacy assistant chatbot built using **FastAPI**, **LangChain**, **FAISS**, and **SQLite**. The chatbot provides information about medications, including their uses, prices, and availability. Each user session is managed with a **UUID** to uniquely track conversations, ensuring that each user has a separate chat history. The chatbot retrieves relevant drug information using **FAISS** and generates intelligent responses using the **LLama 3** model integrated with **LangChain**.

## Features

- **Pharmacy Assistance**: Provides medication information, prices, and suggests over-the-counter drugs for common symptoms.
- **Document Retrieval**: Uses **FAISS** for fast and efficient retrieval of relevant drug descriptions.
- **Natural Language Processing**: Integrated with **LangChain** and **LLama 3** to handle user queries and generate contextual responses.
- **SQLite Database**: Stores chat history and user interactions for each unique session, ensuring every user has their own isolated conversation.
- **Session Management**: Each chat session is identified using a **UUID**, providing a unique session ID to track user conversations separately.
- **FastAPI**: Exposes RESTful APIs for interacting with the chatbot and managing conversations.

## Technologies Used

- **FastAPI**: API framework for building RESTful endpoints.
- **LangChain**: Framework for managing large language models (LLMs) and prompt engineering.
- **FAISS**: Used for document retrieval and similarity search.
- **LLama 3 (ChatGroq)**: LLM used for generating responses to user queries.
- **SQLite**: Database for storing chat history.
- **Python**: The core programming language for the project.
- **UUID**: Used to uniquely identify and manage user sessions.

## Setup and Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/pharmacy-chatbot.git
cd pharmacy-chatbot
