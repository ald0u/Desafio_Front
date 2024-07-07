import React from 'react';

const discussItems = [
    { title: "How to Become a Better Coder?", comments: 47 },
    { title: "The Front-End Development we’re used to is dying", comments: 47 },
    { title: "I suck at writing!", comments: 47 },
    { title: "What was your win this week?", comments: 47 },
    { title: "Should You Be Documenting Your Coding Journey?", comments: 47 }
];

const watercoolerItems = [
    { title: "Caption This!", comments: 6 }
];

const DiscussAsside = () => {
    return (
        <div className="asideContent space-y-6">
            <div className="section bg-white border border-gray-200 rounded-lg shadow-md p-4">
                <h2 className="sectionTitle text-lg font-bold text-gray-800">#discuss</h2>
                <p className="sectionSubtitle text-gray-600 mb-4">Discussion threads targeting the whole community</p>
                {discussItems.map((item, index) => (
                    <div key={index} className="sectionItem mb-4">
                        <a href="#" className="sectionLink text-blue-600 font-semibold">{item.title}</a>
                        <p className="comments text-gray-500 text-sm">{item.comments} comments</p>
                    </div>
                ))}
            </div>
            <div className="section bg-white border border-gray-200 rounded-lg shadow-md p-4">
                <h2 className="sectionTitle text-lg font-bold text-gray-800">#watercooler</h2>
                <p className="sectionSubtitle text-gray-600 mb-4">Light, and off-topic conversation.</p>
                {watercoolerItems.map((item, index) => (
                    <div key={index} className="sectionItem mb-4">
                        <a href="#" className="sectionLink text-blue-600 font-semibold">{item.title}</a>
                        <p className="comments text-gray-500 text-sm">{item.comments} comments</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiscussAsside;