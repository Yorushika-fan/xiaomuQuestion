const questionList = Array(1000)
    .fill(0)
    .map((_, index) => {
        const month = Math.floor(Math.random() * 12)
        const day = Math.floor(Math.random() * 28) + 1
        return {
            id: `q${index + 1}`,
            title: `问卷${index + 1}`,
            isPublished: Math.random() > 0.5,
            isStar: Math.random() > 0.7,
            answerCount: Math.floor(Math.random() * 100),
            isDeleted: Math.random() > 0.9,
            createdAt: `2024-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        }
    })

export {questionList}
