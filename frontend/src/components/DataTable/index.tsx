const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>10/02/2021</td>
                        <td>August Androck</td>
                        <td>23</td>
                        <td>21</td>
                        <td>10101.00</td>
                    </tr>
                    <tr>
                        <td>31/03/2021</td>
                        <td>Willian Docker</td>
                        <td>74</td>
                        <td>8</td>
                        <td>8000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;