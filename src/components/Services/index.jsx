import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP
} from './ServiceStyle'

import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-2.svg'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesH1>
        </ServicesContainer>
    )
}

export default Services
