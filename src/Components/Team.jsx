import React from 'react';
import Carousel from './Caruosel'; 
const teamMembers = [
    {
        name: 'Falema Garedow',
        role: 'CEO, Scientific Director',
        image: '/assets/feleme.jpg', 
        social: {
            facebook: '#',
            github: 'https://linkedin.com/in/falemagaredow',
            telegram: 'https://t.me/Thelightofreason'
        }
    },
    {
        name: 'Gemechis Sheleme',
        role: 'Chief Financial and HR Officer (CFO)',
        image: '/assets/gemechis.jpg', 
        social: {
            facebook: '#',
            github: 'https://linkedin.com/in/gemechis-sheleme-4220011b6',
            telegram: 'https://t.me/truthandfidelity'
        }
    },
    {
        name: 'Dr. Samuel Tesfaye',
        role: 'Board Member',
        image: '/assets/samuel.jpg', 
        social: {
            facebook: '#',
            github: 'https://linkedin.com/in/samuel-tesfaye-a35b35234',
            telegram: '#'
        }
    },
    {
        name: 'Nabiyat Lemma',
        role: 'Chief Marketing and Promotion Officer',
        image: '/assets/nebiyat.jpg', 
        social: {
            facebook: '#',
            github: 'https://linkedin.com/in/nebiyatlema',
            telegram: '#'
        }
    }, 
    {
        name: 'Belay Birhanu',
        role: 'CTO, Product Manager',
        image: '/assets/belay.jpg', 
        social: {
            facebook: '#',
            linkedin: 'https://linkedin.com/in/belay-bgwa',
            telegram: '#'
        }
    },
   
    
    
];

const TeamSection = () => {
    return (
        <section className="py-12" id='team'>
            <div className="w-full px-6 md:px-24 md:mb-5 text-lg text-center">
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
                                    <i className="fab fa-facebook-f text-[#6666BC] hover:text-[#00A551]"></i>
                                </a>
                                <a href={member.social.github} className="text-[#0000FF]">
                                    <i className="fab fa-linkedin text-[#6666BC] hover:text-[#00A551]"></i>
                                </a>
                                <a href={member.social.telegram} className="text-[#0000FF ]">
                                    <i className="fab fa-telegram-plane text-[#6666BC] hover:text-[#00A551]"></i>
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
