package com.example.userservice.service;

import org.springframework.http.ResponseEntity;
import com.example.userservice.entity.User;

public interface UserService {

    ResponseEntity<?> registerUser(User user);

    ResponseEntity<?> loginUser(User user);
}