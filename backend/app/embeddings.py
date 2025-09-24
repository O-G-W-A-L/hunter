import logging
from langchain_community.vectorstores import FAISS
from langchain_google_vertexai import VertexAIEmbeddings
from app.portfolio_data import get_documents

logging.basicConfig(level=logging.INFO)

def create_faiss_index():
    try:
        docs = get_documents()
        embeddings = VertexAIEmbeddings(model_name="textembedding-gecko", project="halogen-chemist-467611-c2", location="us-central1")
        vectorstore = FAISS.from_documents(docs, embeddings)
        logging.info("FAISS index created successfully.")
        return vectorstore
    except Exception as e:
        logging.error(f"Failed to create FAISS index: {e}")
        raise

def load_faiss_index():
    try:
        # For now create fresh every time
        vectorstore = create_faiss_index()
        logging.info("FAISS index loaded successfully.")
        return vectorstore
    except Exception as e:
        logging.error(f"Failed to load FAISS index: {e}")
        raise
