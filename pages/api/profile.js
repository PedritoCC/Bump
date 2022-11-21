export const profile = {
    'username': 'Pierre-Pirawat',
    'email': 'pierre@gmail.com',
    
}

export default function handler(req, res) {
    res.status(200).json(profile)
}