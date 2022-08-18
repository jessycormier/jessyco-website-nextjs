import Image from 'next/image';
import React from 'react';
import LightSwitch from '../components/light-switch';
import TextHighlight from '../components/text-highlight.component';

export default class Index extends React.Component {

  private getDate() {
    const d = new Date();
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate()}`;
  }

  render() {
    return <>
    <LightSwitch />
      <section className="dark:bg-gray-800 bg-gray-50 pt-12 pb-12 text-2xl">
        <div className="container mx-auto">
          <div className="flex justify-start content-center">
            <div className="mr-8">
              <Image
                className="rounded-[18px] border-4 border-gray-800 dark:border-gray-700 mt-16 "
                src="/profile.jpg"
                alt="Profile Picture"
                width={300}
                height={400}
                objectFit="cover"
              />
            </div>
            <div className='flex flex-col justify-center'>
              <div className="my-2">
                Welcome to my website <TextHighlight>Jessy.co</TextHighlight>{' '}
                I&apos;m Jessy Cormier. I&apos;m a software engineer based in{' '}
                Canada.
              </div>
              <div className="my-2">
                I&apos;m a{' '}
                <TextHighlight>Senior Front-End Developer</TextHighlight> with a{' '}
                passion for <TextHighlight>web development</TextHighlight> and{' '}
                <TextHighlight>user expereince design</TextHighlight>.
              </div>
              <div className="my-2">
                I develop and implement well-considered and maintainable{' '}
                experiences.
              </div>
              <div className="my-2">
                I believe in <TextHighlight>consistency</TextHighlight>,{' '}
                <TextHighlight>accessibility</TextHighlight>,{' '}
                and <TextHighlight>utility</TextHighlight>.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto mt-8 flex justify-between text-gray-400'>
        <p>
          More coming soon
        </p>
        <p>
          Last Updated on {this.getDate()}
        </p>
      </section>
    </>;
  }
}
