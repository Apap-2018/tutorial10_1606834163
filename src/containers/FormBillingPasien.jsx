import React from 'react';

export const FormBillingPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Billing Pasien</h2>
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" defaultValue={props.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan" defaultValue={!props.pasien.jumlahTagihan ? "" : props.pasien.jumlahTagihan}/>
            </div>
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue={!props.pasien.tanggalTagihan ? "" : props.pasien.tanggalTagihan}/>
            </div>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />

            <button className="btn btn-success" value="submit">Add</button>
        </form>
    )
}