import api from './api';

class PlayerService {
  getPlayers() {
    return api.get('/player');
  }
}

export default new PlayerService();
