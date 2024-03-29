package com.ll.gooHaeYu.domain.jobPost.jobPost.entity;

import com.ll.gooHaeYu.domain.jobPost.jobPost.entity.type.PayBasis;
import com.ll.gooHaeYu.domain.jobPost.jobPost.entity.type.WagePaymentMethod;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static lombok.AccessLevel.PROTECTED;

@Entity
@AllArgsConstructor(access = PROTECTED)
@NoArgsConstructor(access = PROTECTED)
@Builder
@Getter
@Table(name = "wage")
public class Wage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int cost = 0;

    private boolean paid;

    private int workTime = 0;

    private int workDays = 0;

    @Enumerated(EnumType.STRING)
    private PayBasis payBasis = PayBasis.UNDEFINED;

    @Enumerated(EnumType.STRING)
    private WagePaymentMethod wagePaymentMethod = WagePaymentMethod.UNDEFINED;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_post_detail", nullable = false)
    private JobPostDetail jobPostDetail;

    public void updateWageInfo(int cost, PayBasis payBasis, int workTime, int workDays) {
        this.cost = cost;
        this.payBasis = payBasis;
        this.workTime = workTime;
        this.workDays = workDays;
    }
}
