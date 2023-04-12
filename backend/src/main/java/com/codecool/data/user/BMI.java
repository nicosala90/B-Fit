package com.codecool.data.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class BMI {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private double bmiValues;
    private LocalDate localDate;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private RegisteredUser registeredUser;

}
