'use strict';

$(document).ready(function () {
    /*---------------------------------------
        jQuery Sparklines
    ----------------------------------------*/

    // Quick stats bar chart
    if($('.sparkline-bar-stats')[0]) {
        $('.sparkline-bar-stats').sparkline('html', {
            type: 'bar',
            height: 36,
            barWidth: 3,
            barColor: '#fff',
            barSpacing: 2
        });
    }

    //Sample Sparkline Line Chart
    if ($('.sparkline-line')[0]) {
        $('.sparkline-line').sparkline('html', {
            type: 'line',
            width: '100%',
            height: 50,
            lineColor: '#0160a2',
            fillColor: 'rgba(0,0,0,0)',
            lineWidth: 1,
            maxSpotColor: '#0160a2',
            minSpotColor: '#0160a2',
            spotColor: '#0160a2',
            spotRadius: 4,
            highlightSpotColor: '#0160a2',
            highlightLineColor: '#0160a2'
        });
    }

    //Sample Sparkline Bar Chart
    if ($('.sparkline-bar')[0]) {
        $('.sparkline-bar').sparkline('html', {
            type: 'bar',
            height: 40,
            barWidth: 3,
            barColor: '#0553A1',
            barSpacing: 2
        });
    }

    //Sample Sparkline Tristate Chart
    if ($('.sparkline-tristate')[0]) {
        $('.sparkline-tristate').sparkline('html', {
            type: 'tristate',
            height: 40,
            posBarColor: '#5CB65F',
            zeroBarColor: '#5CB65F',
            negBarColor: '#f5c942',
            barWidth: 3,
            barSpacing: 2
        });
    }

    //Sample Sparkline Discrete Chart
    if ($('.sparkline-discrete')[0]) {
        $('.sparkline-discrete').sparkline('html', {
            type: 'discrete',
            height: 40,
            lineColor: '#00BCD4',
            thresholdColor: '#d066e2',
            thresholdValue: 4
        });
    }

    //Sample Sparkline Bullet Chart
    if ($('.sparkline-bullet')[0]) {
        $('.sparkline-bullet').sparkline('html', {
            type: 'bullet',
            targetColor: '#fff',
            performanceColor: '#0553A1',
            rangeColors: ['#dc3545', '#fc7f7d', '#fc918f'],
            width: '100%',
            height: 50
        });
    }

    //Sample Sparkline Pie Chart
    if ($('.sparkline-pie')[0]) {
        $('.sparkline-pie').sparkline('html', {
            type: 'pie',
            height: 50,
            sliceColors: ['#f5c942', '#dc3545', '#0553A1', '#5CB65F']
        });
    }

    /*---------------------------------------
        Easy Pie Charts
    ----------------------------------------*/
    if($('.easy-pie-chart')[0]) {
        $('.easy-pie-chart').each(function () {
            var value = $(this).data('value');
            var size = $(this).data('size');
            var trackColor = $(this).data('track-color');
            var barColor = $(this).data('bar-color');

            $(this).find('.easy-pie-chart__value').css({
                lineHeight: (size)+'px',
                fontSize: (size/4)+'px',
                color: barColor
            });

            $(this).easyPieChart ({
                easing: 'easeOutBounce',
                barColor: barColor,
                trackColor: trackColor,
                scaleColor: 'rgba(0,0,0,0)',
                lineCap: 'round',
                lineWidth: 2,
                size: size,
                animate: 3000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            })
        });
    }
});