#!/usr/bin/env python3
"""
Comprehensive Backend Test for Database Integration
"""

import requests
import time
from datetime import datetime

BACKEND_URL = "https://scholarly-counsel.preview.emergentagent.com/api"

def test_database_persistence():
    """Test that data persists in MongoDB"""
    print("🗄️  Testing Database Persistence...")
    
    # Get initial count
    try:
        response = requests.get(f"{BACKEND_URL}/status")
        initial_count = len(response.json())
        print(f"Initial status checks count: {initial_count}")
        
        # Create new status check
        test_data = {
            "client_name": f"Test Client {datetime.now().strftime('%H:%M:%S')}"
        }
        
        post_response = requests.post(f"{BACKEND_URL}/status", json=test_data)
        if post_response.status_code == 200:
            created_item = post_response.json()
            print(f"✅ Created: {created_item}")
            
            # Verify it appears in GET
            get_response = requests.get(f"{BACKEND_URL}/status")
            if get_response.status_code == 200:
                all_items = get_response.json()
                new_count = len(all_items)
                print(f"New count: {new_count}")
                
                if new_count == initial_count + 1:
                    # Check if our item is in the list
                    found = any(item['id'] == created_item['id'] for item in all_items)
                    if found:
                        print("✅ Database persistence working - item found in subsequent GET")
                        return True
                    else:
                        print("❌ Item not found in GET response")
                        return False
                else:
                    print(f"❌ Count mismatch - expected {initial_count + 1}, got {new_count}")
                    return False
            else:
                print(f"❌ GET request failed: {get_response.status_code}")
                return False
        else:
            print(f"❌ POST request failed: {post_response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Database test error: {e}")
        return False

def test_data_validation():
    """Test data validation and error handling"""
    print("\n📋 Testing Data Validation...")
    
    # Test valid data
    valid_data = {"client_name": "Valid Client"}
    response = requests.post(f"{BACKEND_URL}/status", json=valid_data)
    if response.status_code == 200:
        print("✅ Valid data accepted")
    else:
        print(f"❌ Valid data rejected: {response.status_code}")
        return False
    
    # Test invalid data - missing required field
    invalid_data = {}
    response = requests.post(f"{BACKEND_URL}/status", json=invalid_data)
    if response.status_code == 422:  # FastAPI validation error
        print("✅ Invalid data properly rejected (422)")
    else:
        print(f"❌ Invalid data not properly handled: {response.status_code}")
        return False
    
    # Test invalid data - wrong type
    wrong_type_data = {"client_name": 123}  # Should be string
    response = requests.post(f"{BACKEND_URL}/status", json=wrong_type_data)
    if response.status_code == 422:
        print("✅ Wrong data type properly rejected (422)")
    else:
        print(f"❌ Wrong data type not properly handled: {response.status_code}")
        return False
    
    return True

def test_api_response_structure():
    """Test API response structure and data types"""
    print("\n🔍 Testing API Response Structure...")
    
    # Test POST response structure
    test_data = {"client_name": "Structure Test Client"}
    response = requests.post(f"{BACKEND_URL}/status", json=test_data)
    
    if response.status_code == 200:
        data = response.json()
        required_fields = ["id", "client_name", "timestamp"]
        
        for field in required_fields:
            if field not in data:
                print(f"❌ Missing field in POST response: {field}")
                return False
        
        # Check data types
        if not isinstance(data["id"], str):
            print(f"❌ ID should be string, got {type(data['id'])}")
            return False
            
        if not isinstance(data["client_name"], str):
            print(f"❌ Client name should be string, got {type(data['client_name'])}")
            return False
            
        # Timestamp should be string (ISO format)
        if not isinstance(data["timestamp"], str):
            print(f"❌ Timestamp should be string, got {type(data['timestamp'])}")
            return False
            
        print("✅ POST response structure is correct")
    else:
        print(f"❌ POST request failed: {response.status_code}")
        return False
    
    # Test GET response structure
    response = requests.get(f"{BACKEND_URL}/status")
    if response.status_code == 200:
        data = response.json()
        if isinstance(data, list):
            print(f"✅ GET response is list with {len(data)} items")
            
            if len(data) > 0:
                # Check first item structure
                item = data[0]
                for field in required_fields:
                    if field not in item:
                        print(f"❌ Missing field in GET response item: {field}")
                        return False
                print("✅ GET response item structure is correct")
        else:
            print(f"❌ GET response should be list, got {type(data)}")
            return False
    else:
        print(f"❌ GET request failed: {response.status_code}")
        return False
    
    return True

if __name__ == "__main__":
    print("🚀 Comprehensive Backend Database Testing")
    print("=" * 50)
    
    results = []
    results.append(test_database_persistence())
    results.append(test_data_validation())
    results.append(test_api_response_structure())
    
    print("\n" + "=" * 50)
    passed = sum(results)
    total = len(results)
    print(f"📊 Database Tests: {passed}/{total} passed")
    
    if passed == total:
        print("✅ All database integration tests passed!")
    else:
        print("❌ Some database tests failed")