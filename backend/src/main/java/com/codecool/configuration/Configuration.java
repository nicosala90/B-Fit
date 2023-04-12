package com.codecool.configuration;

import org.springframework.context.annotation.Bean;


@org.springframework.context.annotation.Configuration
public class Configuration {

    @Bean
    public HealthState healthState(){
        return new HealthState();
    }
}
