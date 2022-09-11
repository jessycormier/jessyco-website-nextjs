import Image from 'next/image';
import React from 'react';
import TextHighlight from '../app/components/text-highlight.component';

export default class Index extends React.Component {
  render() {
    return <>
      <section className="dark:bg-gray-800 bg-gray-50 pt-12 pb-12 text-2xl p-4 overflow-hidden  top-0 left-0 right-0">
        <div className="container mx-auto">
          <div className="flex justify-start content-center ">
            <div className="mr-8 hidden md:block">
              <Image
                className="rounded-[18px] border-4 border-gray-800 dark:border-gray-700"
                src="/profile.jpg"
                alt="Profile Picture"
                width={300}
                height={400}
                objectFit="cover"
              />
            </div>
            <div className='flex flex-col justify-center text-center md:text-left'>

              <p>
                Hi!, welcome to <TextHighlight>Jessy.co</TextHighlight>{' '}
                I&apos;m Jessy Cormier. I&apos;m a software engineer based in{' '}
                Canada.
              </p>
              <p>
                I&apos;m a{' '}
                <TextHighlight>Senior Front-End Developer</TextHighlight> with a{' '}
                passion for <TextHighlight>web development</TextHighlight> and{' '}
                <TextHighlight>user expereince</TextHighlight>.
              </p>
              <p>
                I develop and implement well-considered and maintainable{' '}
                experiences, I believe in <TextHighlight>consistency</TextHighlight>,{' '}
                <TextHighlight>accessibility</TextHighlight>,{' '}
                and <TextHighlight>utility</TextHighlight>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
  }
}
