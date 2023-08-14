from app.algorithms.searching_algorithms import SearchingAlgorithms


class TestSearchingAlgorithms:

    def setup_method(self):

        self.array = [x for x in range(1, 11)]
        self.search = SearchingAlgorithms(self.array)

    def test_linear_search_element_present(self):

        # Action.
        result = self.search.linear_search(self.array[3])

        # Assert.
        assert result[-1]['found'] == True
        assert result[-1]['value'] == 4
        assert len(result) == 4

    def test_linear_search_element_absent(self):

        # Action.
        result = self.search.linear_search(13)

        # Assert.
        assert result[-1]['found'] == False
        assert len(result) == len(self.array)

    def test_linear_search_empty_array(self):

        # Setup.
        array = []
        search = SearchingAlgorithms(array)

        # Action.
        result = search.linear_search(3)

        # Assert.
        assert len(result) == 0

    def test_binary_search_element_present(self):

        # Action
        result = self.search.binary_search(7)

        # Assert
        assert result[-1]['value'] == 7
        assert result[-1]['found'] == True

    def test_binary_search_element_absent(self):

        # Action
        result = self.search.binary_search(12)

        # Assert
        assert all([not step['found'] for step in result])

    def test_binary_search_with_empty_array(self):

        # Setup
        array = []
        search = SearchingAlgorithms(array)

        # Action.
        result = search.binary_search(5)

        # Assert.
        assert len(result) == 0

    def test_binary_search_element_at_start(self):

        # Action.
        result = self.search.binary_search(1)

        # Assert.
        assert result[-1]['value'] == 1
        assert result[-1]['found'] == True

    def test_binary_search_element_at_end(self):

        # Action
        result = self.search.binary_search(10)

        # Assert.
        assert result[-1]['value'] == 10
        assert result[-1]['found'] == True

    def test_recursive_linear_search_element_present(self):

        # Action
        result = self.search.recursive_linear_search(8)

        # Assert
        assert result[-1]['value'] == 8
        assert result[-1]['found'] == True

    def test_recursive_linear_search_element_absent(self):

        # Action
        result = self.search.recursive_linear_search(20)

        # Assert
        assert result[-1]['found'] == False
        assert len(result) == len(self.array)

    def test_recursive_linear_search_element_at_start(self):

        # Action
        result = self.search.recursive_linear_search(1)

        # Assert
        assert result[0]['value'] == 1
        assert result[0]['found'] == True
        assert len(result) == 1

    def test_recursive_linear_search_element_at_end(self):

        # Action
        result = self.search.recursive_linear_search(10)

        # Assert
        assert result[-1]['value'] == 10
        assert result[-1]['found'] == True
        assert len(result) == 10