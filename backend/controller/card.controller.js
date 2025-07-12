const addCard = async (req, res) => {
    const { title, budget } = req.body

    if (!title || !budget)
        return res.status(200).json({ message: "all fields required", status: 401, success: false })

    if (budget < 1000)
        return res.status(200).json({ message: "budget price cannot be less than 1000", status: 409, success: false })

    return res.status(200).json({ message: "expense card created successfully!!", status: 200, success: true })
}

const getCards = (req,res)=>{
    const cards = await 
}