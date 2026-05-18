package com.example.diaryservice.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.diaryservice.dto.DiaryRequest;
import com.example.diaryservice.entity.DiaryEntry;
import com.example.diaryservice.repository.DiaryRepository;

@Service
public class DiaryServiceImpl implements DiaryService {

    @Autowired
    private DiaryRepository diaryRepository;

    @Override
    public ResponseEntity<?> addDiary(DiaryRequest diaryRequest) {

        DiaryEntry diaryEntry = new DiaryEntry();

        diaryEntry.setTitle(diaryRequest.getTitle());
        diaryEntry.setContent(diaryRequest.getContent());
        diaryEntry.setUserId(diaryRequest.getUserId());

        diaryEntry.setCreatedAt(LocalDateTime.now());
        diaryEntry.setUpdatedAt(LocalDateTime.now());

        diaryRepository.save(diaryEntry);

        return ResponseEntity.ok("Diary saved successfully");
    }

    @Override
    public ResponseEntity<?> getUserDiaries(Long userId) {

        List<DiaryEntry> diaries =
                diaryRepository.findByUserId(userId);

        return ResponseEntity.ok(diaries);
    }
    
    
    @Override
    public ResponseEntity<?> getDiaryById(Long diaryId) {

        Optional<DiaryEntry> optionalDiary =
                diaryRepository.findById(diaryId);

        if (optionalDiary.isEmpty()) {
            return ResponseEntity.status(404)
                    .body("Diary not found");
        }

        return ResponseEntity.ok(optionalDiary.get());
    }

    @Override
    public ResponseEntity<?> updateDiary(
            Long diaryId,
            DiaryRequest diaryRequest) {

        Optional<DiaryEntry> optionalDiary =
                diaryRepository.findById(diaryId);

        if (optionalDiary.isEmpty()) {
            return ResponseEntity.status(404)
                    .body("Diary not found");
        }

        DiaryEntry diaryEntry = optionalDiary.get();

        diaryEntry.setTitle(diaryRequest.getTitle());
        diaryEntry.setContent(diaryRequest.getContent());
        diaryEntry.setUpdatedAt(LocalDateTime.now());

        diaryRepository.save(diaryEntry);

        return ResponseEntity.ok("Diary updated successfully");
    }
    
    

    @Override
    public ResponseEntity<?> deleteDiary(Long diaryId) {

        Optional<DiaryEntry> optionalDiary =
                diaryRepository.findById(diaryId);

        if (optionalDiary.isEmpty()) {
            return ResponseEntity.status(404)
                    .body("Diary not found");
        }

        diaryRepository.deleteById(diaryId);

        return ResponseEntity.ok("Diary deleted successfully");
    }
}