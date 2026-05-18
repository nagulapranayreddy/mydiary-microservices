package com.example.diaryservice.service;

import org.springframework.http.ResponseEntity;

import com.example.diaryservice.dto.DiaryRequest;

public interface DiaryService {

    ResponseEntity<?> addDiary(DiaryRequest diaryRequest);

    ResponseEntity<?> getUserDiaries(Long userId);

    ResponseEntity<?> updateDiary(
            Long diaryId,
            DiaryRequest diaryRequest);
    
    ResponseEntity<?> getDiaryById(Long diaryId);

    ResponseEntity<?> deleteDiary(Long diaryId);
}