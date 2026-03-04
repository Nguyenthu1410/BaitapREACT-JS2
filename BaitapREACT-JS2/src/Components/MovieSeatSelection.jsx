import React, { useState } from 'react';
import data from '../Data/danhSachGhe.json'

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const cols = Array.from({ length: 12 }, (_, i) => i + 1);

const MovieSeatSelection = () => {
  const [name, setName] = useState(''); // Để tên trống ban đầu
  const [numSeats, setNumSeats] = useState(0); // Để số lượng là 0 ban đầu
  
  // THAY ĐỔI TẠI ĐÂY: Khởi tạo là mảng rỗng để không có ghế nào được chọn mặc định
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    // Nếu chưa nhập số lượng ghế thì nhắc nhở (tùy chọn)
    if (numSeats <= 0) {
      alert("Vui lòng nhập số lượng ghế muốn mua trước!");
      return;
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      if (selectedSeats.length < numSeats) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        alert(`Bạn đã chọn đủ ${numSeats} ghế.`);
      }
    }
  };

  return (
    <div className="container">
      <div className="input-section">
        <p>Fill The Required Details Below And Select Your Seats</p>
        <div className="form-group">
          <label>Name *</label>
          <input 
            type="text" 
            placeholder="Nhập tên của bạn..."
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <label>Number of Seats *</label>
          <input 
            type="number" 
            placeholder="0"
            value={numSeats || ''} 
            onChange={(e) => setNumSeats(parseInt(e.target.value) || 0)} 
          />
        </div>
        <button className="btn-start">Start Selecting</button>
      </div>

      <div className="legend">
        <div className="item"><span className="box selected"></span> Selected Seat</div>
        <div className="item"><span className="box reserved"></span> Reserved Seat</div>
        <div className="item"><span className="box empty"></span> Empty Seat</div>
      </div>

      <div className="seat-map">
        <p className="status-msg">Please Select your Seats NOW!</p>
        <div className="grid">
          <div className="row header">
            <div className="cell label"></div>
            {cols.map(c => (
              <div key={c} className={`cell label ${c === 6 ? 'gap-left' : ''}`}>{c}</div>
            ))}
          </div>

          {rows.map(r => (
            <div key={r} className="row">
              <div className="cell label">{r}</div>
              {cols.map(c => {
                const seatId = `${r}${c}`;
                const isSelected = selectedSeats.includes(seatId);
                return (
                  <div 
                    key={seatId} 
                    className={`cell seat ${isSelected ? 'selected' : 'empty'} ${c === 5 ? 'gap-right' : ''}`}
                    onClick={() => handleSeatClick(seatId)}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="screen-area">
        <div className="screen-bar">SCREEN THIS WAY</div>
      </div>

      <button className="btn-confirm">Confirm Selection</button>

      <div className="summary">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Seats</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name || "(Trống)"}</td>
              <td>{numSeats}</td>
              <td>
                {selectedSeats.length > 0 
                  ? selectedSeats.sort().join(', ') 
                  : "(Chưa chọn ghế)"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieSeatSelection;