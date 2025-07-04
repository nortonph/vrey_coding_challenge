import path from 'path';

export default {
  getAllMeters: async (req, res) => {
    try {
      res.status(200);
      res.sendFile(path.join(__dirname, '../views/index.html'));
    } catch (error) {
      console.error('__ERROR in controller: ', error);
      res.status(500).json({ data: null, message: 'Internal Server Error'});
    }
  }
}
