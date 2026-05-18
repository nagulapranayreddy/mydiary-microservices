package com.example.diaryservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diaryservice.entity.DiaryEntry;

public interface DiaryRepository
        extends JpaRepository<DiaryEntry, Long> {

    List<DiaryEntry> findByUserId(Long userId);
}