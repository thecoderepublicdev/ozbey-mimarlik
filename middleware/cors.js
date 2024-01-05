import Cors from 'cors';

const cors = Cors({
  origin: 'https://sitenizin-domaini.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

export default cors;
