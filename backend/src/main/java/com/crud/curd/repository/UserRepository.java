package com.crud.curd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.curd.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
