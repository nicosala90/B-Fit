package com.codecool.data.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private double weight;
    private double height;

    @OneToMany(mappedBy = "client")
    private List<BMI> bmiValues = new ArrayList<>();

    @Autowired
//    public Client(int age, Gender gender, double weight, double height) {
//        this.age = age;
//        this.gender = gender;
//        this.weight = weight;
//        this.height = height;
//    }

    public Client(Long id, int age, Gender gender, double weight, double height, String firstName, String lastName, String email) {
        this.id = id;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public void addCalculatedBMI(BMI bmi) {
        bmiValues.add(bmi);
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", age=" + age +
                ", gender=" + gender +
                ", weight=" + weight +
                ", height=" + height +
                '}';
    }
}
