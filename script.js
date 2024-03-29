$(document).ready(function() {
    $('.suggested-songs').hide();
    $('#switchLevel').hide();
    $('#searchTabContent').hide(); // Hide search tab content initially

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = hours + ':' + minutes;
        $('#currentTime').text(timeString);
    }

    setInterval(updateTime, 1000);
    updateTime();

    $('.level-button').click(function() {
        $('.user-level').hide();
        $('#switchLevel').show();
        $('.bottom-bar-container').show();
        $('#screenTitle').show();
        $('.suggested-songs').hide();
        $('#searchTabContent').hide(); // Hide search tab content when switching tabs
        if (this.id === 'beginner') {
            $('#Beginner').show();
        } else if (this.id === 'intermediate') {
            $('#Intermediate').show();
        } else if (this.id === 'advanced') {
            $('#Advanced').show();
        }
    });

    $('#switchLevel').click(function() {
        $('.suggested-songs').hide();
        $('.user-level').show();
        $('#switchLevel').hide();
        $('#searchTabContent').hide(); // Hide search tab content when switching tabs
    });

    $('#songsButton').click(function() {
        $('.user-level').hide();
        $('#switchLevel').show();
        $('.bottom-bar-container').show();
        $('#screenTitle').show();
        $('.suggested-songs').hide();
        $('#Beginner').show();
        $('#searchTabContent').hide(); // Hide search tab content when switching tabs
    });

    $('#searchButton').click(function() {
        $('.user-level').hide();
        $('#switchLevel').hide();
        $('.bottom-bar-container').show();
        $('#screenTitle').show();
        $('.suggested-songs').hide();
        $('#searchTabContent').show(); // Show search tab content
        $('#searchResults').empty(); // Clear previous search results
        $('#searchInput').val(''); // Clear search input field
    });

    $('#profileButton').click(function() {
        $('.user-level').hide();
        $('#switchLevel').hide();
        $('.bottom-bar-container').show();
        $('#screenTitle').show();
        $('.suggested-songs').hide();
        $('#searchTabContent').hide(); // Hide search tab content when switching tabs
    });

    $('.song-button').click(function() {
        $('.user-level').hide();
        $('#switchLevel').hide();
        $('.bottom-bar-container').hide();
        $('.suggested-songs').hide();
        $('#screenTitle').html('<div class="back-arrow">&#8592;</div>').show();
    });

    function setButtonWidth() {
        let maxWidth = 0;
        $('.level-button').each(function() {
            let width = $(this).outerWidth();
            maxWidth = Math.max(maxWidth, width);
        });
        $('.level-button').css('width', maxWidth + 'px');
        $('#switchLevel').outerWidth(maxWidth + 100);
    }

    setButtonWidth();

    $(window).resize(function() {
        setButtonWidth();
    });

    // Function to handle search
    function handleSearch() {
        var query = $('#searchInput').val().toLowerCase();
        var filteredSongs = [];
        $('.song-button').each(function() {
            var songName = $(this).data('song').toLowerCase();
            if (songName.includes(query)) {
                filteredSongs.push($(this).clone());
            }
        });
        $('#searchResults').empty();
        if (filteredSongs.length > 0) {
            $('#searchResults').append(filteredSongs);
        } else {
            $('#searchResults').html('<p>No matching songs found</p>');
        }
    }

    // Handle input in search field
    $('#searchInput').on('input', function() {
        handleSearch(); // Perform search on input change
    });
});
