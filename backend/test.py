import asyncio
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'app'))

from app.chat import chat_with_gemini

async def test_variety():
    # Test same question multiple times to see variety
    same_questions = [
        "Tell me about yourself",
        "What's your background?", 
        "Who are you?",
    ]
    
    different_questions = [
        "What programming languages do you know?",
        "What are your technical skills?",
        "Tell me about your projects",
        "What's your experience?",
        "Hi there!",
        "What do you enjoy about coding?",
        "What are your goals?"
    ]
    
    print("=== TESTING VARIETY (Same Question) ===")
    for i, question in enumerate(same_questions, 1):
        print(f"\n🤔 Question {i}: {question}")
        response = await chat_with_gemini(question)
        print(f"🤖 Response: {response}")
        print("-" * 80)
    
    print("\n=== TESTING DIFFERENT QUESTIONS ===")
    for question in different_questions:
        print(f"\n🤔 Question: {question}")
        response = await chat_with_gemini(question)
        print(f"🤖 Response: {response}")
        print("-" * 80)

if __name__ == "__main__":
    asyncio.run(test_variety())