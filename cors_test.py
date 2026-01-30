#!/usr/bin/env python3
"""
Detailed CORS and API testing for backend
"""

import requests
import json

BACKEND_URL = "https://scholarly-counsel.preview.emergentagent.com/api"

def test_cors_detailed():
    """Test CORS more thoroughly"""
    print("🔍 Testing CORS Configuration in Detail...")
    
    # Test 1: Simple GET request (should work)
    try:
        response = requests.get(f"{BACKEND_URL}/", headers={
            'Origin': 'https://scholarly-counsel.preview.emergentagent.com'
        })
        print(f"GET request status: {response.status_code}")
        print(f"CORS headers in response: {dict(response.headers)}")
        
        if 'access-control-allow-origin' in response.headers:
            print(f"✅ CORS Allow-Origin: {response.headers['access-control-allow-origin']}")
        else:
            print("❌ No CORS Allow-Origin header found")
            
    except Exception as e:
        print(f"❌ Error testing GET: {e}")
    
    # Test 2: POST request with JSON
    try:
        response = requests.post(f"{BACKEND_URL}/status", 
            json={"client_name": "CORS Test"},
            headers={
                'Origin': 'https://scholarly-counsel.preview.emergentagent.com',
                'Content-Type': 'application/json'
            })
        print(f"POST request status: {response.status_code}")
        print(f"POST CORS headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            print("✅ POST request successful with CORS")
        
    except Exception as e:
        print(f"❌ Error testing POST: {e}")

def test_backend_from_frontend_perspective():
    """Test backend as if called from frontend"""
    print("\n🌐 Testing Backend from Frontend Perspective...")
    
    # This simulates how the frontend would call the backend
    headers = {
        'Origin': 'https://scholarly-counsel.preview.emergentagent.com',
        'Referer': 'https://scholarly-counsel.preview.emergentagent.com/',
        'User-Agent': 'Mozilla/5.0 (compatible; Frontend Test)'
    }
    
    try:
        # Test root endpoint
        response = requests.get(f"{BACKEND_URL}/", headers=headers)
        print(f"Frontend-style GET: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Response: {data}")
        
        # Test status endpoint
        response = requests.get(f"{BACKEND_URL}/status", headers=headers)
        print(f"Status endpoint: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Status checks retrieved: {len(data)}")
            
    except Exception as e:
        print(f"❌ Error in frontend-style test: {e}")

if __name__ == "__main__":
    test_cors_detailed()
    test_backend_from_frontend_perspective()