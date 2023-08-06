from app.algorithms.searching_algorithms import SearchingAlgorithms


class TestSearchingAlgorithms:

    def test_linear_search_element_present(self):

        # Setup.
        array = [x for x in range(1, 6)]
        search = SearchingAlgorithms(array)

        # Action.
        result = search.linear_search(array[3])

        # Assert.
        assert result[-1]['found'] == True
        assert result[-1]['value'] == 4
        assert len(result) == 4

    def test_linear_search_element_absent(self):

        # Setup.
        array = [x for x in range(1, 6)]
        search = SearchingAlgorithms(array)

        # Action.
        result = search.linear_search(7)

        # Assert.
        assert result[-1]['found'] == False
        assert len(result) == len(array)

    def test_linear_search_empty_array(self):

        # Setup.
        array = []
        search = SearchingAlgorithms(array)

        # Action.
        result = search.linear_search(3)

        # Assert.
        assert len(result) == 0

    def test_binary_search_element_present(self):

        # Setup
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        search = SearchingAlgorithms(array)

        # Action
        result = search.binary_search(7)

        # Assert
        assert result[-1]['value'] == 7
        assert result[-1]['found'] == True

    def test_binary_search_element_absent(self):

        # Setup
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        search = SearchingAlgorithms(array)

        # Action
        result = search.binary_search(11)

        # Assert
        assert all([not step['found'] for step in result])

    def test_binary_search_with_empty_array(self):

        # Setup.
        array = []
        search = SearchingAlgorithms(array)

        # Action.
        result = search.binary_search(5)

        # Assert.
        assert len(result) == 0

    def test_binary_search_element_at_start(self):

        # Setup
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        search = SearchingAlgorithms(array)

        # Action.
        result = search.binary_search(1)

        # Assert.
        assert result[-1]['value'] == 1
        assert result[-1]['found'] == True

    def test_binary_search_element_at_end(self):

        # Setup
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        search = SearchingAlgorithms(array)

        # Action
        result = search.binary_search(10)

        # Assert.
        assert result[-1]['value'] == 10
        assert result[-1]['found'] == True
