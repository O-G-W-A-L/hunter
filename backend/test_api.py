import httpx
import asyncio
import json

async def test_api():
    url = "http://localhost:8000/chat"
    
    test_message = {
        "message": "Hello, who are you?"
    }
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, json=test_message)
            print(f"Status Code: {response.status_code}")
            print(f"Response Headers: {response.headers}")
            print(f"Raw Response: {response.text}")
            
            if response.status_code == 200:
                data = response.json()
                print(f"Parsed Response: {json.dumps(data, indent=2)}")
            else:
                print(f"Error: {response.status_code} - {response.text}")
                
        except Exception as e:
            print(f"Request failed: {e}")

if __name__ == "__main__":
    asyncio.run(test_api())