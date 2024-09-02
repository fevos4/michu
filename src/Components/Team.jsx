import React from 'react';
import Carousel from './Caruosel'; 
const teamMembers = [
    {
        name: 'John Smith',
        role: 'CEO',
        image: '/assets/p3.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    },
    {
        name: 'Joe Shark',
        role: 'CTO',
        image: '/assets/p2.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    },
    {
        name: 'Amanda',
        role: 'Secretary',
        image: '/assets/p1.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    },
    {
        name: 'Amanda',
        role: 'Secretary',
        image: '/assets/p1.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    }, 
    {
        name: 'Amanda',
        role: 'Secretary',
        image: '/assets/p1.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    },
    {
        name: 'Amanda',
        role: 'Secretary',
        image: '/assets/p1.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    },
    {
        name: 'Amanda',
        role: 'Secretary',
        image: '/assets/p1.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    },
    {
        name: 'Amanda',
        role: 'Secretary',
        image: '/assets/p1.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    },
    {
        name: 'Amanda',
        role: 'Secretary',
        image: '/assets/p1.jpg', 
        social: {
            facebook: '#',
            github: '#',
            telegram: '#'
        }
    }
    
];

const TeamSection = () => {
    return (
        <section className="py-12" id='team'>
            <div className="w-full px-6 md:px-24 md:mb-5 text-lg">
            <p className="text-sm text-gray-500 font-medi">Our Team</p>
            <h2 className="text-3xl font-boldi text-green-600 mb-6">Our Dedicated Team
            Members</h2>
            </div>

            <div className="w-full">
                <Carousel arrows={true}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                            style={{ minWidth: '300px' }} 
                        >
                            <img className="w-24 h-24 rounded-full mb-6" src={member.image} alt={member.name} />
                            
                            <h3 className="text-blue-600 text-xl font-boldi">{member.name}</h3>
                            <p className="text-gray-500 font-regi ">{member.role}</p>
                            <div className="flex space-x-4">
                                <a href={member.social.facebook} className="text-[#0000FF]">
                                    <i className="fab fa-facebook-f text-[#6666BC]"></i>
                                </a>
                                <a href={member.social.github} className="text-[#0000FF]">
                                    <i className="fab fa-github text-[#6666BC]"></i>
                                </a>
                                <a href={member.social.telegram} className="text-[#0000FF ]">
                                    <i className="fab fa-telegram-plane text-[#6666BC]"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default TeamSection;
