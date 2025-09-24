from app.chat import ask_question

if __name__ == "__main__":
    print("Ask questions about Hunter's portfolio. Type 'exit' to quit.")
    while True:
        query = input("\nYour question: ").strip()
        if query.lower() in ["exit", "quit"]:
            break
        
        answer, sources = ask_question(query)
        print("\nAnswer:\n", answer)
        print("\nSources:")
        for doc in sources:
            print(f"- [{doc.metadata.get('category')}] {doc.page_content[:150].replace(chr(10), ' ')}...")
