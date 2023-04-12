package com.codecool.data.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
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

    @OneToMany(mappedBy = "user")
    private List<BMI> bmiValues = new ArrayList<>();

    public User(int age, Gender gender, double weight, double height) {
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
    }
    public void addCalculatedBMI(BMI bmi){
        bmiValues.add(bmi);
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
