package com.example.diaryservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.diaryservice.dto.DiaryRequest;
import com.example.diaryservice.service.DiaryService;

@RestController
@RequestMapping("/api/diaries")
public class DiaryController {

    @Autowired
    private DiaryService diaryService;

    @PostMapping("/add")
    public ResponseEntity<?> addDiary(
            @RequestBody DiaryRequest diaryRequest) {

        return diaryService.addDiary(diaryRequest);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserDiaries(
            @PathVariable Long userId) {

        return diaryService.getUserDiaries(userId);
    }
    
    @GetMapping("/{diaryId}")
    public ResponseEntity<?> getDiaryById(
            @PathVariable Long diaryId) {

        return diaryService.getDiaryById(diaryId);
    }

    @PutMapping("/update/{diaryId}")
    public ResponseEntity<?> updateDiary(
            @PathVariable Long diaryId,
            @RequestBody DiaryRequest diaryRequest) {

        return diaryService.updateDiary(
                diaryId,
                diaryRequest
        );
    }

    @DeleteMapping("/delete/{diaryId}")
    public ResponseEntity<?> deleteDiary(
            @PathVariable Long diaryId) {

        return diaryService.deleteDiary(diaryId);
    }
}