import React from 'react'

const PopularTags = () => {
    return (
        <div className="conteinerAsideScroll">
                <div className="bar-element">
                    {[
                        'webdev', 'javascript', 'beginners', 'programming', 'tutorial', 'react',
                        'python', 'productivity', 'devops', 'aws', 'opensource', 'discuss',
                        'css', 'node', 'news', 'career', 'typescript', 'html', 'database',
                        'learning', 'testing', 'github', 'java', 'cloud', 'security', 'ai'
                    ].map((tag, index) => (
                        <a key={index} href="#" className="aElement">#{tag}</a>
                    ))}
                </div>
        </div>
    )
}

export default PopularTags;