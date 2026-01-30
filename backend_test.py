#!/usr/bin/env python3
"""
Backend Test Suite for Rudra Verde Lex International Law Firm Website
Testing FastAPI backend endpoints and functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Use the production URL from frontend .env
BACKEND_URL = "https://scholarly-counsel.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.results = {
            "total_tests": 0,
            "passed": 0,
            "failed": 0,
            "errors": []
        }
    
    def log_test(self, test_name, success, message="", response_data=None):
        """Log test results"""
        self.results["total_tests"] += 1
        if success:
            self.results["passed"] += 1
            print(f"✅ {test_name}: PASS - {message}")
        else:
            self.results["failed"] += 1
            self.results["errors"].append({
                "test": test_name,
                "message": message,
                "response": response_data
            })
            print(f"❌ {test_name}: FAIL - {message}")
    
    def test_health_check(self):
        """Test basic health check endpoint"""
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Health Check", True, f"Status: {response.status_code}, Message: {data.get('message')}")
                else:
                    self.log_test("Health Check", False, f"Unexpected response: {data}")
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}: {response.text}")
        except requests.exceptions.RequestException as e:
            self.log_test("Health Check", False, f"Connection error: {str(e)}")
    
    def test_cors_configuration(self):
        """Test CORS configuration"""
        try:
            # Test preflight request
            response = requests.options(f"{self.base_url}/", timeout=10)
            cors_headers = response.headers
            
            # Check for CORS headers
            if 'Access-Control-Allow-Origin' in cors_headers:
                self.log_test("CORS Configuration", True, f"CORS enabled - Origin: {cors_headers.get('Access-Control-Allow-Origin')}")
            else:
                # Sometimes CORS headers are only present on actual requests
                response = requests.get(f"{self.base_url}/", timeout=10)
                cors_headers = response.headers
                if 'Access-Control-Allow-Origin' in cors_headers:
                    self.log_test("CORS Configuration", True, f"CORS enabled - Origin: {cors_headers.get('Access-Control-Allow-Origin')}")
                else:
                    self.log_test("CORS Configuration", False, "CORS headers not found")
        except requests.exceptions.RequestException as e:
            self.log_test("CORS Configuration", False, f"Connection error: {str(e)}")
    
    def test_status_endpoint_post(self):
        """Test POST /status endpoint"""
        try:
            test_data = {
                "client_name": "Rudra Verde Test Client"
            }
            
            response = requests.post(
                f"{self.base_url}/status", 
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "client_name", "timestamp"]
                
                if all(field in data for field in required_fields):
                    if data["client_name"] == test_data["client_name"]:
                        self.log_test("Status POST", True, f"Created status check with ID: {data.get('id')}")
                    else:
                        self.log_test("Status POST", False, f"Client name mismatch: expected '{test_data['client_name']}', got '{data.get('client_name')}'")
                else:
                    missing_fields = [field for field in required_fields if field not in data]
                    self.log_test("Status POST", False, f"Missing fields: {missing_fields}")
            else:
                self.log_test("Status POST", False, f"HTTP {response.status_code}: {response.text}")
        except requests.exceptions.RequestException as e:
            self.log_test("Status POST", False, f"Connection error: {str(e)}")
    
    def test_status_endpoint_get(self):
        """Test GET /status endpoint"""
        try:
            response = requests.get(f"{self.base_url}/status", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Status GET", True, f"Retrieved {len(data)} status checks")
                else:
                    self.log_test("Status GET", False, f"Expected list, got: {type(data)}")
            else:
                self.log_test("Status GET", False, f"HTTP {response.status_code}: {response.text}")
        except requests.exceptions.RequestException as e:
            self.log_test("Status GET", False, f"Connection error: {str(e)}")
    
    def test_api_error_handling(self):
        """Test API error handling for invalid requests"""
        try:
            # Test invalid endpoint
            response = requests.get(f"{self.base_url}/nonexistent", timeout=10)
            if response.status_code == 404:
                self.log_test("404 Error Handling", True, "Correctly returns 404 for invalid endpoint")
            else:
                self.log_test("404 Error Handling", False, f"Expected 404, got {response.status_code}")
            
            # Test invalid POST data
            response = requests.post(
                f"{self.base_url}/status",
                json={},  # Missing required client_name
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
                self.log_test("Validation Error Handling", True, f"Correctly returns {response.status_code} for invalid data")
            else:
                self.log_test("Validation Error Handling", False, f"Expected 400/422, got {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Error Handling", False, f"Connection error: {str(e)}")
    
    def test_backend_connectivity(self):
        """Test if backend is reachable and responsive"""
        try:
            response = requests.get(self.base_url, timeout=5)
            self.log_test("Backend Connectivity", True, f"Backend reachable at {self.base_url}")
        except requests.exceptions.Timeout:
            self.log_test("Backend Connectivity", False, "Backend connection timeout")
        except requests.exceptions.ConnectionError:
            self.log_test("Backend Connectivity", False, f"Cannot connect to backend at {self.base_url}")
        except Exception as e:
            self.log_test("Backend Connectivity", False, f"Unexpected error: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend Tests for Rudra Verde Lex International")
        print(f"🔗 Backend URL: {self.base_url}")
        print("=" * 60)
        
        # Run tests in order of priority
        self.test_backend_connectivity()
        self.test_health_check()
        self.test_cors_configuration()
        self.test_status_endpoint_post()
        self.test_status_endpoint_get()
        self.test_api_error_handling()
        
        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Summary:")
        print(f"   Total Tests: {self.results['total_tests']}")
        print(f"   ✅ Passed: {self.results['passed']}")
        print(f"   ❌ Failed: {self.results['failed']}")
        
        if self.results["failed"] > 0:
            print(f"\n🔍 Failed Test Details:")
            for error in self.results["errors"]:
                print(f"   - {error['test']}: {error['message']}")
        
        return self.results["failed"] == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)