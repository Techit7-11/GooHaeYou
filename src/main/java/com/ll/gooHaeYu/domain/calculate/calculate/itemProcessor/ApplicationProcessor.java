package com.ll.gooHaeYu.domain.calculate.calculate.itemProcessor;

import com.ll.gooHaeYu.domain.application.application.entity.Application;
import com.ll.gooHaeYu.domain.jobPost.jobPost.entity.Wage;
import com.ll.gooHaeYu.domain.jobPost.jobPost.repository.WageRepository;
import com.ll.gooHaeYu.domain.member.member.entity.Member;
import com.ll.gooHaeYu.domain.member.member.repository.MemberRepository;
import com.ll.gooHaeYu.domain.payment.cashLog.entity.CashLog;
import com.ll.gooHaeYu.domain.payment.cashLog.service.CashLogService;
import com.ll.gooHaeYu.global.event.cashLog.CashLogEvent;
import com.ll.gooHaeYu.global.event.notification.CalculateNotificationEvent;
import com.ll.gooHaeYu.global.exception.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

import static com.ll.gooHaeYu.global.exception.ErrorCode.AMOUNT_MISMATCH;

@Component
@RequiredArgsConstructor
public class ApplicationProcessor implements ItemProcessor<Application, Application> {

    private final WageRepository wageRepository;
    private final MemberRepository memberRepository;
    private final CashLogService cashLogService;
    private final ApplicationEventPublisher publisher;

    @Override
    public Application process(Application application) throws Exception {
        Wage wage = wageRepository.findByJobPostDetail(application.getJobPostDetail());

        if (wage == null) {
            throw new RuntimeException("일치하는 WAGE 없음");
        }

        Member member = application.getMember();
        CashLog cashLog = cashLogService.findByApplicationIdAndValidate(application.getId());
        int cost = (int)cashLog.getNetAmount();

        if (wage.getCost() == application.getEarn()) {
            member.addRestCash(cost);
            publisher.publishEvent(new CashLogEvent(this, application));
            application.setEarn(0);
            application.setReceive(true);
            memberRepository.save(member);
            publisher.publishEvent(new CalculateNotificationEvent(this, application));
        }else throw new CustomException(AMOUNT_MISMATCH);
        return application;
    }
}