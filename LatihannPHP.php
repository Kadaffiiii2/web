
<?php
// Inisialisasi variable
$tableSize = 10;
$highlightedRow = isset($_POST['highlightRow']) ? $_POST['highlightRow'] : -1;
$highlightedCol = isset($_POST['highlightCol']) ? $_POST['highlightCol'] : -1;
$showDetails = isset($_POST['showDetails']) ? true : false;
$selectedNumber = isset($_POST['selectedNumber']) ? $_POST['selectedNumber'] : 1;
?>
<section class="about">
        <div class="container">
            <h3>Tabel Perkalian Interaktif</h3>
            
            <div class="multiplication-container">
                <h2 class="multiplication-title">Tabel Perkalian 10 x 10</h2>
                
                <div class="multiplication-controls">
                    <div class="control-group">
                        <span class="control-label">Pilih Angka untuk Dihighlight:</span>
                        <div class="number-selector">
                            <?php for ($i = 1; $i <= $tableSize; $i++): ?>
                                <button class="number-btn <?php echo $selectedNumber == $i ? 'active' : ''; ?>" 
                                    onclick="selectNumber(<?php echo $i; ?>)"><?php echo $i; ?></button>
                            <?php endfor; ?>
                        </div>
                        
                        <div class="show-details-control">
                            <input type="checkbox" id="showDetails" <?php echo $showDetails ? 'checked' : ''; ?> 
                                onchange="toggleDetails()">
                            <label for="showDetails">Tampilkan Detail</label>
                        </div>
                    </div>
                </div>
                
                <form id="controlForm" method="post">
                    <input type="hidden" name="highlightRow" id="highlightRow" value="<?php echo $highlightedRow; ?>">
                    <input type="hidden" name="highlightCol" id="highlightCol" value="<?php echo $highlightedCol; ?>">
                    <input type="hidden" name="selectedNumber" id="selectedNumber" value="<?php echo $selectedNumber; ?>">
                    <input type="hidden" name="showDetails" id="showDetailsInput" value="<?php echo $showDetails ? '1' : ''; ?>">
                </form>
                
                <table class="multiplication-table">
                    <thead>
                        <tr>
                            <th>x</th>
                            <?php for ($i = 1; $i <= $tableSize; $i++): ?>
                                <th class="<?php echo $i == $selectedNumber ? 'highlighted' : ''; ?>"><?php echo $i; ?></th>
                            <?php endfor; ?>
                        </tr>
                    </thead>
                    <tbody>
                        <?php for ($row = 1; $row <= $tableSize; $row++): ?>
                            <tr>
                                <th class="<?php echo $row == $selectedNumber ? 'highlighted' : ''; ?>"><?php echo $row; ?></th>
                                <?php for ($col = 1; $col <= $tableSize; $col++): ?>
                                    <?php
                                    $isHighlighted = ($row == $highlightedRow && $col == $highlightedCol);
                                    $isInSelectedRow = ($row == $selectedNumber);
                                    $isInSelectedCol = ($col == $selectedNumber);
                                    $result = $row * $col;
                                    $isResultSelected = ($result == $selectedNumber);
                                    
                                    $cellClass = '';
                                    if ($isHighlighted) {
                                        $cellClass = 'highlighted';
                                    } elseif ($isInSelectedRow || $isInSelectedCol || $isResultSelected) {
                                        $cellClass = 'highlighted-light';
                                    }
                                    ?>
                                    <td class="<?php echo $cellClass; ?>" 
                                        onclick="highlightCell(<?php echo $row; ?>, <?php echo $col; ?>)">
                                        <?php echo $result; ?>
                                    </td>
                                <?php endfor; ?>
                            </tr>
                        <?php endfor; ?>
                    </tbody>
                </table>
                
                <?php if ($highlightedRow > 0 && $highlightedCol > 0): ?>
                <div class="details-section">
                    <h3 class="details-title">Detail Perkalian <?php echo $highlightedRow; ?> x <?php echo $highlightedCol; ?></h3>
                    
                    <div class="details-content">
                        <div class="details-card">
                            <h4>Formula</h4>
                            <div class="formula"><?php echo $highlightedRow; ?> × <?php echo $highlightedCol; ?> = <?php echo $highlightedRow * $highlightedCol; ?></div>
                            <div class="result">Hasil: <?php echo $highlightedRow * $highlightedCol; ?></div>
                        </div>
                        
                        <div class="details-card">
                            <h4>Penjumlahan Berurutan</h4>
                            <div class="formula">
                                <?php
                                $numbers = array();
                                for ($i = 0; $i < $highlightedRow; $i++) {
                                    $numbers[] = $highlightedCol;
                                }
                                echo implode(' + ', $numbers) . ' = ' . ($highlightedRow * $highlightedCol);
                                ?>
                            </div>
                        </div>
                        
                        <div class="details-card factors">
                            <h4>Faktor dari <?php echo $highlightedRow * $highlightedCol; ?></h4>
                            <ul>
                                <?php
                                $product = $highlightedRow * $highlightedCol;
                                for ($i = 1; $i <= $product; $i++) {
                                    if ($product % $i == 0) {
                                        echo "<li>$i</li>";
                                    }
                                }
                                ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
                
                <div class="action-buttons">
                    <button class="action-btn reset-btn" onclick="resetTable()">Reset Tabel</button>
                    <button class="action-btn print-btn" onclick="window.print()">Cetak Tabel</button>
                </div>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        $(document).ready(function(){
            $(".bg-loader").hide();
        });
        
        function highlightCell(row, col) {
            document.getElementById('highlightRow').value = row;
            document.getElementById('highlightCol').value = col;
            document.getElementById('controlForm').submit();
        }
        
        function selectNumber(num) {
            document.getElementById('selectedNumber').value = num;
            document.getElementById('controlForm').submit();
        }
        
        function toggleDetails() {
            const checkbox = document.getElementById('showDetails');
            document.getElementById('showDetailsInput').value = checkbox.checked ? '1' : '';
            document.getElementById('controlForm').submit();
        }
        
        function resetTable() {
            document.getElementById('highlightRow').value = -1;
            document.getElementById('highlightCol').value = -1;
            document.getElementById('selectedNumber').value = 1;
            document.getElementById('showDetailsInput').value = '';
            document.getElementById('controlForm').submit();
        }
    </script>
</body>
</html>
