package com.ll.gooHaeYu.domain.payment.payment.dto;

import com.ll.gooHaeYu.domain.payment.payment.entity.Payment;
import com.ll.gooHaeYu.domain.payment.payment.entity.type.PayType;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;

import java.util.UUID;

@Getter
@Builder
public class PaymentReqDto {

    @NotNull
    private PayType payType;

    @NotNull
    private Long amount;

    private String orderId;

    private String orderName;

    private Long applicationId;

    public Payment toEntity() {
        return Payment.builder()
                .payType(payType.getDescription())
                .orderId(UUID.randomUUID().toString())
                .orderName(orderName)
                .applicationId(applicationId)
                .totalAmount(amount)
                .paid(false)
                .build();
    }
}