package com.codecool.data.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private int age;
    private Gender gender;
    private double weight;
    private double height;

    public User(int age, Gender gender, double weight, double height) {
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", age=" + age +
                ", gender=" + gender +
                ", weight=" + weight +
                ", height=" + height +
                '}';
    }
}
