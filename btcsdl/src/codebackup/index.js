import { React } from 'react'
import { 
  Container, 
  Form, 
  FormButton, 
  FormContent, 
  FormH1, 
  FormInput, 
  FormLabel, 
  FormWrap,
  Icon,
  Text
} from './signinelements'
/* import { HeroBg, VideoBg, HeroContainer } from '../herosection/heroelements'
import Video from '../../videos/animesky.mp4' */ 

const SignIn = () => {
  return (
    <>
      <Container>
        {/* <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg> */} 
        <FormWrap>
          <Icon to="/">Login to get waifu</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="email" required />
                <FormButton type="submit">Continue</FormButton>
                <Text>Forgot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn