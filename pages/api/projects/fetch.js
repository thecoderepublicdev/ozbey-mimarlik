import Projects from "@data/Projects";

export default function fetchHandler(req, res) {
    const { filter } = req.body;
    
    try {
        switch(filter) {
            case 'ALL':
                res.status(200).json({success: true, projects: Projects})
                break;
                
            case 'COMPLETED':
                res.status(200).json({success: true, projects: Projects.filter(project => project.status === 'COMPLETED')})
                break;
    
            case 'NON_COMPLETED':
                res.status(200).json({success: true, projects: Projects.filter(project => project.status === 'NON_COMPLETED')})
                break;
    
            default:
                res.status(404).json({success: false, message: 'Undefined filter type', body: req.body});
                break;
        }
    } catch (err) {
        res.status(500).json({success: false, message: 'An error occured', error: err})
    }
}