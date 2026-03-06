import React from 'react'

const Seat = () => {
    const danhSachGheData = [ 
  {
    "hang": "", 
    "danhSachGhe": [
      {"soGhe":"1","gia":0},
      {"soGhe":"2","gia":0},
      {"soGhe":"3","gia":0},
      {"soGhe":"4","gia":0},
      {"soGhe":"5","gia":0},
      {"soGhe":"6","gia":0},
      {"soGhe":"7","gia":0},
      {"soGhe":"8","gia":0},
      {"soGhe":"9","gia":0},
      {"soGhe":"10","gia":0},
      {"soGhe":"11","gia":0},
      {"soGhe":"12","gia":0}
    ] 
  },
  {
    "hang": "A", 
    "danhSachGhe": [
      {"soGhe":"A1","gia":75000,"daDat":false},
      {"soGhe":"A2","gia":75000,"daDat":false},
      {"soGhe":"A3","gia":75000,"daDat":false},
      {"soGhe":"A4","gia":75000,"daDat":false},
      {"soGhe":"A5","gia":75000,"daDat":false},
      {"soGhe":"A6","gia":75000,"daDat":false},
      {"soGhe":"A7","gia":75000,"daDat":false},
      {"soGhe":"A8","gia":75000,"daDat":false},
      {"soGhe":"A9","gia":75000,"daDat":false},
      {"soGhe":"A10","gia":75000,"daDat":false},
      {"soGhe":"A11","gia":0,"daDat":true},
      {"soGhe":"A12","gia":0,"daDat":true}
    ] 
  },

  {
    "hang": "J", 
    "danhSachGhe": [
      {"soGhe":"J1","gia":75000,"daDat":false},
      {"soGhe":"J2","gia":75000,"daDat":false},
      {"soGhe":"J3","gia":75000,"daDat":false},
      {"soGhe":"J4","gia":75000,"daDat":false},
      {"soGhe":"J5","gia":75000,"daDat":false},
      {"soGhe":"J6","gia":75000,"daDat":false},
      {"soGhe":"J7","gia":75000,"daDat":false},
      {"soGhe":"J8","gia":75000,"daDat":false},
      {"soGhe":"J9","gia":75000,"daDat":false},
      {"soGhe":"J10","gia":75000,"daDat":false},
      {"soGhe":"J11","gia":75000,"daDat":false},
      {"soGhe":"J12","gia":75000,"daDat":false}
    ] 
  }
]; 

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <div className="flex flex-col items-center gap-4">
        {danhSachGheData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-4">
            {/* Hiển thị tên hàng (A, B, C...) */}
            <div className="w-8 font-bold text-yellow-500">{row.hang}</div>
            
            <div className="flex gap-2">
              {row.danhSachGhe.map((seat) => (
                <button
                  key={seat.soGhe}
                  disabled={seat.daDat}
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-md text-xs font-bold transition-all
                    ${row.hang === "" ? "bg-transparent text-white mb-4" : ""} 
                    ${seat.daDat ? "bg-red-500 cursor-not-allowed" : "bg-white text-black border-2 border-orange-400 hover:bg-green-400"}
                  `}
                >
                  {/* Nếu là hàng tiêu đề thì hiện số 1,2,3... Nếu là hàng ghế thì hiện số ghế A1, B2... */}
                  {row.hang === "" ? seat.soGhe : seat.soGhe.replace(row.hang, '')}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Seat