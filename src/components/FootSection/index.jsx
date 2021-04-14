import React from 'react'
// import { FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa'
import {
    FContainers,
    FLinksContainer,
    FWrap,
    FLinksWrapper,
    FLinkItems,
    FLinkTitleElement,
    FLinks,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FootStyles'

const FootSection = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <FContainers>
                <FWrap>
                    <FLinksContainer>
                        <FLinksWrapper>
                            <FLinkItems>
                                <FLinkTitleElement>About Us</FLinkTitleElement>
                                <FLinks to='/'>How it works</FLinks>
                                <FLinks to='/'>Testimonials</FLinks>
                                <FLinks to='/'>Careers</FLinks>
                                <FLinks to='/'>Investors</FLinks>
                                <FLinks to='/'>Terms and Condition</FLinks>
                            </FLinkItems>
                            <FLinkItems>
                                <FLinkTitleElement>Contact Us</FLinkTitleElement>
                                <FLinks to='/'>Contact</FLinks>
                                <FLinks to='/'>Testimonials</FLinks>
                                <FLinks to='/'>Careers</FLinks>
                                <FLinks to='/'>Investors</FLinks>
                                <FLinks to='/'>Terms and Condition</FLinks>
                            </FLinkItems>
                            <FLinkItems>
                                <FLinkTitleElement>Videos</FLinkTitleElement>
                                <FLinks to='/'>How it works</FLinks>
                                <FLinks to='/'>Testimonials</FLinks>
                                <FLinks to='/'>Careers</FLinks>
                                <FLinks to='/'>Investors</FLinks>
                                <FLinks to='/'>Terms and Condition</FLinks>
                            </FLinkItems>
                            <FLinkItems>
                                <FLinkTitleElement>Social Media</FLinkTitleElement>
                                <FLinks to='/'>How it works</FLinks>
                                <FLinks to='/'>Testimonials</FLinks>
                                <FLinks to='/'>Careers</FLinks>
                                <FLinks to='/'>Investors</FLinks>
                                <FLinks to='/'>Terms and Condition</FLinks>
                            </FLinkItems>
                        </FLinksWrapper>
                    </FLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                            ZZZ 
                            </SocialLogo>
                            <WebsiteRights>
                                {new Date().getFullYear()}
                            All rights reserved.
                        </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FWrap>
            </FContainers>
        </>
    )
}

export default FootSection
