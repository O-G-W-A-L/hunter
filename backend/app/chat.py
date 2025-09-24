from langchain.chains import RetrievalQA
from langchain_google_vertexai import ChatVertexAI
from app.embeddings import load_faiss_index

def get_rag_chain():
    vectorstore = load_faiss_index()
    retriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 3})
    llm = ChatVertexAI(temperature=0)
    
    qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever, return_source_documents=True)
    return qa_chain

def ask_question(query: str):
    qa_chain = get_rag_chain()
    result = qa_chain({"query": query})
    return result["result"], result["source_documents"]
