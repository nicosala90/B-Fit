package com.codecool.data.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Builder
public class BMI {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private double bmiValues;
    private LocalDate localDate;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "client_id")
    private Client client;

    public BMI(Long id, double bmiValues, LocalDate localDate, Client client) {
        this.id = id;
        this.bmiValues = bmiValues;
        this.localDate = localDate;
        this.client = client;
    }
}
