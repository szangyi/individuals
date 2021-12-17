
// ABOUT US - MEET THE TEAM


window.addEventListener("DOMContentLoaded", function () {

    if (window.location.href.indexOf("about-us") > -1) {

        // document.querySelector('#group-1').onclick = function () {
        //     document.querySelector('#group-1-layer').classList.add('active')
        // }

        setTimeout(function () {
            console.log('runs')

            document.querySelector('#group-1').addEventListener('click', function () {
                document.querySelector('#group-1-layer').classList.add('active');
                document.querySelector('#group-2-layer').classList.remove('active');
                document.querySelector('#group-3-layer').classList.remove('active');
                document.querySelector('#group-4-layer').classList.remove('active');
                document.querySelector('#group-5-layer').classList.remove('active');
                document.querySelector('#group-6-layer').classList.remove('active');
                document.querySelector('#group-7-layer').classList.remove('active');
                document.querySelector('#group-8-layer').classList.remove('active');
                document.querySelector('svg').classList.add('rotate-1')
                document.querySelector('svg').classList.remove('rotate-2', 'rotate-3', 'rotate-4', 'rotate-5', 'rotate-6', 'rotate-7', 'rotate-8');

            });

            document.querySelector('#group-2').addEventListener('click', function () {
                document.querySelector('#group-1-layer').classList.remove('active');
                document.querySelector('#group-2-layer').classList.add('active');
                document.querySelector('#group-3-layer').classList.remove('active');
                document.querySelector('#group-4-layer').classList.remove('active');
                document.querySelector('#group-5-layer').classList.remove('active');
                document.querySelector('#group-6-layer').classList.remove('active');
                document.querySelector('#group-7-layer').classList.remove('active');
                document.querySelector('#group-8-layer').classList.remove('active');
                document.querySelector('svg').classList.remove('rotate-1', 'rotate-3', 'rotate-4', 'rotate-5', 'rotate-6', 'rotate-7', 'rotate-8');
                document.querySelector('svg').classList.add('rotate-2')
            });


            document.querySelector('#group-3').addEventListener('click', function () {
                document.querySelector('#group-1-layer').classList.remove('active');
                document.querySelector('#group-2-layer').classList.remove('active');
                document.querySelector('#group-3-layer').classList.add('active');
                document.querySelector('#group-4-layer').classList.remove('active');
                document.querySelector('#group-5-layer').classList.remove('active');
                document.querySelector('#group-6-layer').classList.remove('active');
                document.querySelector('#group-7-layer').classList.remove('active');
                document.querySelector('#group-8-layer').classList.remove('active');
                document.querySelector('svg').classList.remove('rotate-1', 'rotate-2', 'rotate-4', 'rotate-5', 'rotate-6', 'rotate-7', 'rotate-8');
                document.querySelector('svg').classList.add('rotate-3')
            });

            document.querySelector('#group-4').addEventListener('click', function () {
                document.querySelector('#group-1-layer').classList.remove('active');
                document.querySelector('#group-2-layer').classList.remove('active');
                document.querySelector('#group-3-layer').classList.remove('active');
                document.querySelector('#group-4-layer').classList.add('active');
                document.querySelector('#group-5-layer').classList.remove('active');
                document.querySelector('#group-6-layer').classList.remove('active');
                document.querySelector('#group-7-layer').classList.remove('active');
                document.querySelector('#group-8-layer').classList.remove('active');
                document.querySelector('svg').classList.remove('rotate-1', 'rotate-2', 'rotate-3', 'rotate-5', 'rotate-6', 'rotate-7', 'rotate-8');
                document.querySelector('svg').classList.add('rotate-4')
            });


            document.querySelector('#group-5').addEventListener('click', function () {
                document.querySelector('#group-1-layer').classList.remove('active');
                document.querySelector('#group-2-layer').classList.remove('active');
                document.querySelector('#group-3-layer').classList.remove('active');
                document.querySelector('#group-4-layer').classList.remove('active');
                document.querySelector('#group-5-layer').classList.add('active');
                document.querySelector('#group-6-layer').classList.remove('active');
                document.querySelector('#group-7-layer').classList.remove('active');
                document.querySelector('#group-8-layer').classList.remove('active');
                document.querySelector('svg').classList.remove('rotate-1', 'rotate-2', 'rotate-3', 'rotate-4', 'rotate-6', 'rotate-7', 'rotate-8');
                document.querySelector('svg').classList.add('rotate-5')
            });

            document.querySelector('#group-6').addEventListener('click', function () {
                document.querySelector('#group-1-layer').classList.remove('active');
                document.querySelector('#group-2-layer').classList.remove('active');
                document.querySelector('#group-3-layer').classList.remove('active');
                document.querySelector('#group-4-layer').classList.remove('active');
                document.querySelector('#group-5-layer').classList.remove('active');
                document.querySelector('#group-6-layer').classList.add('active');
                document.querySelector('#group-7-layer').classList.remove('active');
                document.querySelector('#group-8-layer').classList.remove('active');
                document.querySelector('svg').classList.remove('rotate-1', 'rotate-2', 'rotate-3', 'rotate-4', 'rotate-5', 'rotate-7', 'rotate-8');
                document.querySelector('svg').classList.add('rotate-6')
            });


            document.querySelector('#group-7').addEventListener('click', function () {
                document.querySelector('#group-1-layer').classList.remove('active');
                document.querySelector('#group-2-layer').classList.remove('active');
                document.querySelector('#group-3-layer').classList.remove('active');
                document.querySelector('#group-4-layer').classList.remove('active');
                document.querySelector('#group-5-layer').classList.remove('active');
                document.querySelector('#group-6-layer').classList.remove('active');
                document.querySelector('#group-7-layer').classList.add('active');
                document.querySelector('#group-8-layer').classList.remove('active');
                document.querySelector('svg').classList.remove('rotate-1', 'rotate-2', 'rotate-3', 'rotate-4', 'rotate-5', 'rotate-6', 'rotate-8');
                document.querySelector('svg').classList.add('rotate-7')
            });

            document.querySelector('#group-8').addEventListener('click', function () {
                document.querySelector('#group-1-layer').classList.remove('active');
                document.querySelector('#group-2-layer').classList.remove('active');
                document.querySelector('#group-3-layer').classList.remove('active');
                document.querySelector('#group-4-layer').classList.remove('active');
                document.querySelector('#group-5-layer').classList.remove('active');
                document.querySelector('#group-6-layer').classList.remove('active');
                document.querySelector('#group-7-layer').classList.remove('active');
                document.querySelector('#group-8-layer').classList.add('active');
                document.querySelector('svg').classList.remove('rotate-1', 'rotate-2', 'rotate-3', 'rotate-4', 'rotate-5', 'rotate-6', 'rotate-7');
                document.querySelector('svg').classList.add('rotate-8')
            });

        }, 1000)
    }


    else if (window.location.href.indexOf("insights") > -1) {
        document.querySelector('#dfc-borsen-button').addEventListener('click', function () {
            document.querySelector('#dfc-borsen-button').classList.add('active');
            document.querySelector('#dfc-china-button').classList.remove('active');
            document.querySelector('#dfc-millennials-button').classList.remove('active');
            document.querySelector('#dfc-enteringchina-button').classList.remove('active');
        })

        document.querySelector('#dfc-china-button').addEventListener('click', function () {
            document.querySelector('#dfc-borsen-button').classList.remove('active');
            document.querySelector('#dfc-china-button').classList.add('active');
            document.querySelector('#dfc-millennials-button').classList.remove('active');
            document.querySelector('#dfc-enteringchina-button').classList.remove('active');
        })

        document.querySelector('#dfc-millennials-button').addEventListener('click', function () {
            document.querySelector('#dfc-borsen-button').classList.remove('active');
            document.querySelector('#dfc-china-button').classList.remove('active');
            document.querySelector('#dfc-millennials-button').classList.add('active');
            document.querySelector('#dfc-enteringchina-button').classList.remove('active');
        })

        document.querySelector('#dfc-enteringchina-button').addEventListener('click', function () {
            document.querySelector('#dfc-borsen-button').classList.remove('active');
            document.querySelector('#dfc-china-button').classList.remove('active');
            document.querySelector('#dfc-millennials-button').classList.remove('active');
            document.querySelector('#dfc-enteringchina-button').classList.add('active');
        })

    }

}, false);

